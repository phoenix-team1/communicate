# automatically generated by the FlatBuffers compiler, do not modify

# namespace: grouppack

import flatbuffers

class T_GROUP_ALL_OFFLINE_MSG(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GROUP_ALL_OFFLINE_MSG(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GROUP_ALL_OFFLINE_MSG()
        x.Init(buf, n + offset)
        return x

    # T_GROUP_ALL_OFFLINE_MSG
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GROUP_ALL_OFFLINE_MSG
    def IsFinish(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_ALL_OFFLINE_MSG
    def GroupId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_ALL_OFFLINE_MSG
    def SOfflineMsgList(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .T_OFFLINE_GROUP_MSG import T_OFFLINE_GROUP_MSG
            obj = T_OFFLINE_GROUP_MSG()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GROUP_ALL_OFFLINE_MSG
    def SOfflineMsgListLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

def T_GROUP_ALL_OFFLINE_MSGStart(builder): builder.StartObject(3)
def T_GROUP_ALL_OFFLINE_MSGAddIsFinish(builder, isFinish): builder.PrependInt8Slot(0, isFinish, 0)
def T_GROUP_ALL_OFFLINE_MSGAddGroupId(builder, groupId): builder.PrependUint64Slot(1, groupId, 0)
def T_GROUP_ALL_OFFLINE_MSGAddSOfflineMsgList(builder, sOfflineMsgList): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(sOfflineMsgList), 0)
def T_GROUP_ALL_OFFLINE_MSGStartSOfflineMsgListVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_GROUP_ALL_OFFLINE_MSGEnd(builder): return builder.EndObject()