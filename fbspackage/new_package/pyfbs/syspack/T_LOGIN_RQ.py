# automatically generated by the FlatBuffers compiler, do not modify

# namespace: syspack

import flatbuffers

class T_LOGIN_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_LOGIN_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_LOGIN_RQ()
        x.Init(buf, n + offset)
        return x

    # T_LOGIN_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_LOGIN_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_LOGIN_RQ
    def ApId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # T_LOGIN_RQ
    def ClientTime(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_LOGIN_RQ
    def Cookie(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.Get(flatbuffers.number_types.Uint8Flags, a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 1))
        return 0

    # T_LOGIN_RQ
    def CookieLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # T_LOGIN_RQ
    def Tgt(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_LOGIN_RQ
    def ClientVersion(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_LOGIN_RQ
    def Platform(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_LOGIN_RQ
    def DeviceCode(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_LOGIN_RQ
    def OsType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(20))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_LOGIN_RQ
    def NetType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(22))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def T_LOGIN_RQStart(builder): builder.StartObject(10)
def T_LOGIN_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_LOGIN_RQAddApId(builder, apId): builder.PrependInt32Slot(1, apId, 0)
def T_LOGIN_RQAddClientTime(builder, clientTime): builder.PrependUint64Slot(2, clientTime, 0)
def T_LOGIN_RQAddCookie(builder, cookie): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(cookie), 0)
def T_LOGIN_RQStartCookieVector(builder, numElems): return builder.StartVector(1, numElems, 1)
def T_LOGIN_RQAddTgt(builder, tgt): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(tgt), 0)
def T_LOGIN_RQAddClientVersion(builder, clientVersion): builder.PrependUOffsetTRelativeSlot(5, flatbuffers.number_types.UOffsetTFlags.py_type(clientVersion), 0)
def T_LOGIN_RQAddPlatform(builder, platform): builder.PrependInt8Slot(6, platform, 0)
def T_LOGIN_RQAddDeviceCode(builder, deviceCode): builder.PrependUOffsetTRelativeSlot(7, flatbuffers.number_types.UOffsetTFlags.py_type(deviceCode), 0)
def T_LOGIN_RQAddOsType(builder, osType): builder.PrependUOffsetTRelativeSlot(8, flatbuffers.number_types.UOffsetTFlags.py_type(osType), 0)
def T_LOGIN_RQAddNetType(builder, netType): builder.PrependInt8Slot(9, netType, 0)
def T_LOGIN_RQEnd(builder): return builder.EndObject()
