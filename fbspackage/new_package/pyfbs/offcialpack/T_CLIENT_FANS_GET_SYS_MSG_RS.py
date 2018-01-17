# automatically generated by the FlatBuffers compiler, do not modify

# namespace: offcialpack

import flatbuffers

class T_CLIENT_FANS_GET_SYS_MSG_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_CLIENT_FANS_GET_SYS_MSG_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_CLIENT_FANS_GET_SYS_MSG_RS()
        x.Init(buf, n + offset)
        return x

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def IsFinish(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def ListSysMsgResponse(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .T_OFFCIAL_MESSAGE import T_OFFCIAL_MESSAGE
            obj = T_OFFCIAL_MESSAGE()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def ListSysMsgResponseLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def ListPrivateMsgResponse(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .T_OFFCIAL_MESSAGE import T_OFFCIAL_MESSAGE
            obj = T_OFFCIAL_MESSAGE()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_CLIENT_FANS_GET_SYS_MSG_RS
    def ListPrivateMsgResponseLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

def T_CLIENT_FANS_GET_SYS_MSG_RSStart(builder): builder.StartObject(4)
def T_CLIENT_FANS_GET_SYS_MSG_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_CLIENT_FANS_GET_SYS_MSG_RSAddIsFinish(builder, isFinish): builder.PrependInt8Slot(1, isFinish, 0)
def T_CLIENT_FANS_GET_SYS_MSG_RSAddListSysMsgResponse(builder, listSysMsgResponse): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(listSysMsgResponse), 0)
def T_CLIENT_FANS_GET_SYS_MSG_RSStartListSysMsgResponseVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_CLIENT_FANS_GET_SYS_MSG_RSAddListPrivateMsgResponse(builder, listPrivateMsgResponse): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(listPrivateMsgResponse), 0)
def T_CLIENT_FANS_GET_SYS_MSG_RSStartListPrivateMsgResponseVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_CLIENT_FANS_GET_SYS_MSG_RSEnd(builder): return builder.EndObject()